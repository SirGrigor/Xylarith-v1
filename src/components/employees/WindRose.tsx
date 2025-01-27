import { FC, useEffect, useRef } from 'react';
import { CapabilityArea } from '@/types/skills';
import * as d3 from 'd3';

interface WindRoseProps {
  skills: CapabilityArea[];
  size?: number;
}

export const WindRose: FC<WindRoseProps> = ({
                                              skills,
                                              size = 400
                                            }) => {
  const svgRef = useRef<SVGSVGElement>(null);

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
      if (level < 5) { // Don't add label for outermost circle
        svg.append('text')
            .attr('x', centerX + 5)
            .attr('y', centerY - radiusScale(level))
            .attr('fill', '#6B7280')
            .attr('font-size', '10px')
            .text(level.toString());
      }
    });

    // Draw segments
    const segmentWidth = (2 * Math.PI) / skills.length;

    skills.forEach((skill, i) => {
      const startAngle = angleScale(i) - Math.PI / 2;
      const endAngle = startAngle + segmentWidth;

      // Create arc generator
      const arc = d3.arc()
          .innerRadius(0)
          .outerRadius(radiusScale(skill.level))
          .startAngle(startAngle)
          .endAngle(endAngle);

      // Draw filled segment
      svg.append('path')
          .attr('d', arc as any)
          .attr('transform', `translate(${centerX},${centerY})`)
          .attr('fill', '#3B82F6')
          .attr('fill-opacity', 0.2)
          .attr('stroke', '#3B82F6')
          .attr('stroke-width', 1);

      // Add label
      const labelAngle = startAngle + segmentWidth / 2;
      const labelRadius = radius + 20;
      const labelX = centerX + labelRadius * Math.cos(labelAngle);
      const labelY = centerY + labelRadius * Math.sin(labelAngle);

      svg.append('text')
          .attr('x', labelX)
          .attr('y', labelY)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('fill', '#E5E7EB')
          .attr('font-size', '12px')
          .text(skill.name);

      // Add skill level number at the center of each segment
      const numberRadius = radiusScale(skill.level) / 2;
      const numberX = centerX + numberRadius * Math.cos(labelAngle);
      const numberY = centerY + numberRadius * Math.sin(labelAngle);

      if (skill.level >= 2) { // Only add number if there's enough space
        svg.append('text')
            .attr('x', numberX)
            .attr('y', numberY)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .attr('fill', '#E5E7EB')
            .attr('font-size', '10px')
            .text(skill.level.toString());
      }
    });

  }, [skills, size]);

  return (
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
        <h3 className="text-lg font-semibold text-white mb-4">Skills Distribution</h3>
        <svg ref={svgRef} />
      </div>
  );
};