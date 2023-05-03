import * as React from 'react'

interface ColorGradient {
  gradientStart: string
  gradientStop: string
}

const HeroWavesSvg: React.FC<ColorGradient> = ({ gradientStart, gradientStop }) => {
  return (
    <svg
      id="wave"
      style={{
        transform: 'rotate(0deg)',
        transition: '0.3s',
      }}
      viewBox="0 0 1440 190"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1={0} x2={0} y1={1} y2={0}>
          <stop stopColor={`${gradientStart}`} offset="0%" />
          <stop stopColor={`${gradientStop}`} offset="100%" />
        </linearGradient>
      </defs>
      <path
        style={{
          transform: 'translate(0, 0px)',
          opacity: 1,
        }}
        fill="url(#sw-gradient-0)"
        d="M0,19L26.7,38C53.3,57,107,95,160,104.5C213.3,114,267,95,320,76C373.3,57,427,38,480,34.8C533.3,32,587,44,640,63.3C693.3,82,747,108,800,120.3C853.3,133,907,133,960,129.8C1013.3,127,1067,120,1120,114C1173.3,108,1227,101,1280,88.7C1333.3,76,1387,57,1440,60.2C1493.3,63,1547,89,1600,95C1653.3,101,1707,89,1760,98.2C1813.3,108,1867,139,1920,126.7C1973.3,114,2027,57,2080,41.2C2133.3,25,2187,51,2240,66.5C2293.3,82,2347,89,2400,101.3C2453.3,114,2507,133,2560,136.2C2613.3,139,2667,127,2720,107.7C2773.3,89,2827,63,2880,57C2933.3,51,2987,63,3040,60.2C3093.3,57,3147,38,3200,47.5C3253.3,57,3307,95,3360,110.8C3413.3,127,3467,120,3520,123.5C3573.3,127,3627,139,3680,139.3C3733.3,139,3787,127,3813,120.3L3840,114L3840,190L3813.3,190C3786.7,190,3733,190,3680,190C3626.7,190,3573,190,3520,190C3466.7,190,3413,190,3360,190C3306.7,190,3253,190,3200,190C3146.7,190,3093,190,3040,190C2986.7,190,2933,190,2880,190C2826.7,190,2773,190,2720,190C2666.7,190,2613,190,2560,190C2506.7,190,2453,190,2400,190C2346.7,190,2293,190,2240,190C2186.7,190,2133,190,2080,190C2026.7,190,1973,190,1920,190C1866.7,190,1813,190,1760,190C1706.7,190,1653,190,1600,190C1546.7,190,1493,190,1440,190C1386.7,190,1333,190,1280,190C1226.7,190,1173,190,1120,190C1066.7,190,1013,190,960,190C906.7,190,853,190,800,190C746.7,190,693,190,640,190C586.7,190,533,190,480,190C426.7,190,373,190,320,190C266.7,190,213,190,160,190C106.7,190,53,190,27,190L0,190Z"
      />
      <defs>
        <linearGradient id="sw-gradient-1" x1={0} x2={0} y1={1} y2={0}>
          <stop stopColor={`${gradientStart}`} offset="0%" />
          <stop stopColor={`${gradientStop}`} offset="100%" />
        </linearGradient>
      </defs>
      <path
        style={{
          transform: 'translate(0, 50px)',
          opacity: 0.9,
        }}
        fill="url(#sw-gradient-1)"
        d="M0,57L26.7,63.3C53.3,70,107,82,160,98.2C213.3,114,267,133,320,129.8C373.3,127,427,101,480,76C533.3,51,587,25,640,19C693.3,13,747,25,800,34.8C853.3,44,907,51,960,57C1013.3,63,1067,70,1120,63.3C1173.3,57,1227,38,1280,28.5C1333.3,19,1387,19,1440,22.2C1493.3,25,1547,32,1600,28.5C1653.3,25,1707,13,1760,28.5C1813.3,44,1867,89,1920,98.2C1973.3,108,2027,82,2080,88.7C2133.3,95,2187,133,2240,152C2293.3,171,2347,171,2400,148.8C2453.3,127,2507,82,2560,53.8C2613.3,25,2667,13,2720,22.2C2773.3,32,2827,63,2880,76C2933.3,89,2987,82,3040,66.5C3093.3,51,3147,25,3200,12.7C3253.3,0,3307,0,3360,19C3413.3,38,3467,76,3520,91.8C3573.3,108,3627,101,3680,95C3733.3,89,3787,82,3813,79.2L3840,76L3840,190L3813.3,190C3786.7,190,3733,190,3680,190C3626.7,190,3573,190,3520,190C3466.7,190,3413,190,3360,190C3306.7,190,3253,190,3200,190C3146.7,190,3093,190,3040,190C2986.7,190,2933,190,2880,190C2826.7,190,2773,190,2720,190C2666.7,190,2613,190,2560,190C2506.7,190,2453,190,2400,190C2346.7,190,2293,190,2240,190C2186.7,190,2133,190,2080,190C2026.7,190,1973,190,1920,190C1866.7,190,1813,190,1760,190C1706.7,190,1653,190,1600,190C1546.7,190,1493,190,1440,190C1386.7,190,1333,190,1280,190C1226.7,190,1173,190,1120,190C1066.7,190,1013,190,960,190C906.7,190,853,190,800,190C746.7,190,693,190,640,190C586.7,190,533,190,480,190C426.7,190,373,190,320,190C266.7,190,213,190,160,190C106.7,190,53,190,27,190L0,190Z"
      />
    </svg>
  )
}
export default HeroWavesSvg