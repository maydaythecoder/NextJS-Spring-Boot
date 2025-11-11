"use client";

import type { Player } from "@/lib";
import { memo, useMemo } from "react";
import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

type PlayerAttributeRadarProps = {
  player: Player;
};

type RadarDatum = {
  label: string;
  value: number;
};

const NORMALIZED_DOMAIN: [number, number] = [0, 100];

function transformStats(player: Player): RadarDatum[] {
  return Object.entries(player.stats).map(([key, stat]) => ({
    label: key.replace(/_/g, " "),
    value: stat.value,
  }));
}

const renderTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ value: number; payload: RadarDatum }>;
}) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }

  const { payload: datum, value } = payload[0];

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-lg">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {datum.label}
      </p>
      <p className="text-base font-semibold text-slate-900">{Math.round(value)}</p>
    </div>
  );
};

const PlayerAttributeRadarBase = ({ player }: PlayerAttributeRadarProps) => {
  const data = useMemo(() => transformStats(player), [player]);

  return (
    <div className="h-80 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#cbd5f5" />
          <PolarAngleAxis
            dataKey="label"
            tick={{ fill: "#475569", fontSize: 12 }}
          />
          <PolarRadiusAxis
            domain={NORMALIZED_DOMAIN}
            tick={{ fill: "#94a3b8", fontSize: 11 }}
            tickCount={6}
            axisLine={false}
          />
          <Radar
            name={player.name}
            dataKey="value"
            fill="#1d4ed8"
            fillOpacity={0.2}
            stroke="#1d4ed8"
            strokeWidth={2}
          />
          <Tooltip content={renderTooltip} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const PlayerAttributeRadar = memo(PlayerAttributeRadarBase);


