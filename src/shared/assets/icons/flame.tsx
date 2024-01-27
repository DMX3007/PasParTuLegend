const FlameIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="transparent"
    className={"group-hover:fill-[#773d06] transition-all ease-in-out duration-300 "}
    {...props}
  >
    <path
      fill="url(#a)"
      fillOpacity={0.6}
      className="right-flame"
      d="M12.83 13.506c.372.069.76-.028 1.077-.27.317-.243.538-.61.614-1.022.16-.857-.05-1.295-.216-1.968-.356-1.442.34-2.54 1.814-3.517-.007 1.604.56 3.25 1.5 4.452s1.282 2.486 1.052 3.728a4.828 4.828 0 0 1-.607 1.608c-.296.491-.674.917-1.114 1.253-.44.336-.933.576-1.45.706-.518.13-1.05.148-1.567.052a3.67 3.67 0 0 1-1.444-.61 3.998 3.998 0 0 1-1.101-1.179 4.478 4.478 0 0 1-.592-1.568 4.83 4.83 0 0 1 .01-1.719c.132-.716.506-1.38.906-1.759-.076.412-.001.834.208 1.174.21.34.537.57.91.639Z"
    />
    <path
      fill="url(#b)"
      className="left-flame"
      fillOpacity={0.6}
      d="M9.474 12.558a.853.853 0 0 1-.691.055 1.035 1.035 0 0 1-.566-.48c-.264-.474-.227-.773-.262-1.204-.075-.922-.705-1.431-1.771-1.714.322.946.313 2.03-.005 2.928-.318.897-.267 1.723.115 2.41.176.316.407.597.679.828.272.23.58.406.907.516.327.11.667.154.999.127a2.301 2.301 0 0 0 1.671-.93c.198-.268.34-.58.419-.916.078-.336.091-.69.039-1.043a2.995 2.995 0 0 0-.346-1.013c-.22-.396-.574-.713-.886-.857.127.228.167.492.11.735a.853.853 0 0 1-.412.558Z"
    />
    <path
      fill="url(#c)"
      className="top-flame"
      fillOpacity={0.6}
      d="M6.241 6.422a.53.53 0 0 1 .43.075c.13.087.229.225.272.386.09.334.022.513-.021.784-.093.58.214.994.82 1.336A2.935 2.935 0 0 1 8.183 7.2c.328-.503.42-1.02.29-1.505a1.942 1.942 0 0 0-.288-.617 1.782 1.782 0 0 0-.475-.462c-.182-.12-.382-.2-.588-.236a1.417 1.417 0 0 0-1.155.31c-.16.134-.294.303-.392.498-.098.195-.159.411-.18.637-.02.226 0 .457.06.68.074.278.241.53.41.668a.667.667 0 0 1 .043-.47.53.53 0 0 1 .333-.28Z"
    />
    <path
      fill="url(#d)"
      className="little-flame"
      fillOpacity={0.6}
      d="M5.883 7.875a.155.155 0 0 1-.126-.022.196.196 0 0 1-.08-.113c-.026-.098-.006-.15.006-.23.027-.17-.063-.291-.24-.391a.86.86 0 0 1-.13.529.538.538 0 0 0 0 .622c.038.054.086.1.139.135a.459.459 0 0 0 .172.07.415.415 0 0 0 .34-.091.458.458 0 0 0 .114-.147.522.522 0 0 0 .053-.186.57.57 0 0 0-.018-.2.399.399 0 0 0-.12-.195.196.196 0 0 1-.013.137.155.155 0 0 1-.097.082Z"
    />
    <path
      // fill="url(#e)"
      className="core-flame"
      stroke="#773d06"
      strokeWidth={2}
      d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7.001 7.001 0 0 1-11.95 4.95A7 7 0 0 1 5 15c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={16.119}
        x2={13.933}
        y1={6.729}
        y2={18.528}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="transparent" />
        <stop offset={1} stopColor="transparent" stopOpacity={0.89} />
      </linearGradient>
      <linearGradient
        id="b"
        x1={6.184}
        x2={9.816}
        y1={9.215}
        y2={15.742}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#773d06" />
        <stop offset={1} stopColor="#773d06" stopOpacity={0.89} />
      </linearGradient>
      <linearGradient
        id="c"
        x1={7.742}
        x2={6.51}
        y1={9.003}
        y2={4.405}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="transparent" />
        <stop offset={1} stopColor="transparent" stopOpacity={0.89} />

      </linearGradient>
      <linearGradient
        id="d"
        x1={5.443}
        x2={5.804}
        y1={7.119}
        y2={8.467}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="transparent" />
        <stop offset={1} stopColor="transparent" stopOpacity={0.89} />
      </linearGradient>
      <linearGradient
        id="e"
        x1={12}
        x2={12}
        y1={3}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="transparent" />
        <stop offset={1} stopColor="transparent" stopOpacity={0.89} />
      </linearGradient>
    </defs>
  </svg>
)
export default FlameIcon


{/* <stop stopColor="#FF9B24" /> */ }
{/* <stop offset={1} stopColor="#FA0000" stopOpacity={0.89} /> */ }