import { FC, useEffect, useRef, useState } from 'react';
import { SkillLevel } from '@/types/employee';
import * as d3 from 'd3';

interface SkillRadarProps {
  skills: SkillLevel[];
  size?: number;
  showTooltip?: boolean;
}

export const SkillRadar: FC<SkillRadarProps> = ({
                                                  skills,
                                                  size = 300,
                                                  showTooltip = true
                                                }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltip, setTooltip] = useState<{
    skill: SkillLevel;
    position: { x: number; y: number };
  } | null>(null);

  useEffect(() => {
    if (!svgRef.current || !skills.length) return;

    // Clear previous chart
    d3.select(svgRef.current).selectAll('*').remove();

    const margin = 40;
    const radius = (size - 2 * margin) / 2;
    const centerX = size / 2;
    const centerY = size / 2;

    const svg = d3.select(svgRef.current)
        .attr('width', size)
        .attr('height', size);

    // Create scales
    const angleScale = d3.scaleLinear()
        .domain([0, skills.length])
        .range([0, 2 * Math.PI]);

    const radiusScale = d3.scaleLinear()
        .domain([0, 5])
        .range([0, radius]);

    // Draw background circles and labels
    const levels = [1, 2, 3, 4, 5];
    levels.forEach(level => {
      // Draw level circles
      svg.append('circle')
          .attr('cx', centerX)
          .attr('cy', centerY)
          .attr('r', radiusScale(level))
          .attr('fill', 'none')
          .attr('stroke', '#374151')
          .attr('stroke-width', 1)
          .attr('stroke-dasharray', '2,2');

      // Add level labels
      svg.append('text')
          .attr('x', centerX + 5)
          .attr('y', centerY - radiusScale(level))
          .attr('fill', '#6B7280')
          .attr('font-size', '10px')
          .text(level.toString());
    });

    // Draw axes
    skills.forEach((skill, i) => {
      const angle = angleScale(i) - Math.PI / 2;
      const x2 = centerX + radius * Math.cos(angle);
      const y2 = centerY + radius * Math.sin(angle);

      // Draw axis line
      svg.append('line')
          .attr('x1', centerX)
          .attr('y1', centerY)
          .attr('x2', x2)
          .attr('y2', y2)
          .attr('stroke', '#374151')
          .attr('stroke-width', 1);

      // Add label
      const labelRadius = radius + 20;
      const labelX = centerX + labelRadius * Math.cos(angle);
      const labelY = centerY + labelRadius * Math.sin(angle);

      svg.append('text')
          .attr('x', labelX)
          .attr('y', labelY)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('fill', '#E5E7EB')
          .attr('font-size', '12px')
          .text(skill.name);
    });

    // Create data points for the polygon
    const points = skills.map((skill, i) => {
      const angle = angleScale(i) - Math.PI / 2;
      return {
        x: centerX + radiusScale(skill.level) * Math.cos(angle),
        y: centerY + radiusScale(skill.level) * Math.sin(angle),
        skill
      };
    });

    // Create the polygon path
    const lineGenerator = d3.lineRadial<[number, number]>()
        .angle((_, i) => angleScale(i))
        .radius(d => d[1]);

    const lineData = skills.map((skill, i) => [
      angleScale(i),
      radiusScale(skill.level)
    ] as [number, number]);

    // Draw the polygon
    const skillArea = svg.append('g')
        .attr('transform', `translate(${centerX},${centerY})`);

    skillArea.append('path')
        .datum(lineData)
        .attr('fill', '#3B82F6')
        .attr('fill-opacity', 0.2)
        .attr('stroke', '#3B82F6')
        .attr('stroke-width', 2)
        .attr('d', lineGenerator as any)
        .attr('transform', 'rotate(-90)');

    if (showTooltip) {
      // Add interactive points
      svg.selectAll('.skill-point')
          .data(points)
          .enter()
          .append('circle')
          .attr('class', 'skill-point')
          .attr('cx', d => d.x)
          .attr('cy', d => d.y)
          .attr('r', 6)
          .attr('fill', '#3B82F6')
          .attr('cursor', 'pointer')
          .on('mouseenter', (_event, d) => {
            setTooltip({
              skill: d.skill,
              position: { x: d.x, y: d.y }
            });
          })
          .on('mouseleave', () => {
            setTooltip(null);
          });
    }

  }, [skills, size]);

  return (
      <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
        <h3 className="text-lg font-semibold text-white mb-4">Skills Radar</h3>
        <svg ref={svgRef} />
        {tooltip && showTooltip && (
            <div
                className="absolute z-50 bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-3 w-64 pointer-events-none"
                style={{
                  left: `${tooltip.position.x}px`,
                  top: `${tooltip.position.y}px`,
                  transform: 'translate(-50%, -100%)',
                  marginTop: '-10px'
                }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-white">{tooltip.skill.name}</span>
                <span className="text-sm text-blue-400">Level {tooltip.skill.level}</span>
              </div>
              {tooltip.skill.details && (
                  <div className="space-y-1">
                    {tooltip.skill.details.experience && (
                        <p className="text-sm text-gray-300">
                          Experience: {tooltip.skill.details.experience}
                        </p>
                    )}
                    {tooltip.skill.details.description && (
                        <p className="text-sm text-gray-400">
                          {tooltip.skill.details.description}
                        </p>
                    )}
                  </div>
              )}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800 border-r border-b border-gray-700" />
            </div>
        )}
      </div>
  );
};