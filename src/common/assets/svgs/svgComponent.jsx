const prefix = "img";

function SVGSource({ files, id }) {
  return (
    <SvgComponent isHidden={true}>
      <defs>
        {files.allIds
          .filter((el) => el === id)
          .reduce((defs, fileId, fileIndex) => {
            const file = files.byId[fileId];
            return defs.concat(
              <g
                key={fileIndex}
                id={`${prefix}-${fileId}`}
                dangerouslySetInnerHTML={{ __html: file.data }}
              ></g>
            );
          }, [])}
      </defs>
    </SvgComponent>
  );
}

function SvgComponent(props) {
  if (props.isHidden) {
    return (
      <svg display="none" height="0" width="0">
        {props.children}
      </svg>
    );
  }

  let file = props.files.byId[props.id];

  if (!file) return null;

  let width = props.width || file.width || null;
  let height = props.height || file.height || null;
  let aspectRatio = props.aspectRatio || "xMinYMin";
  let viewBox = file.viewBox
    ? file.viewBox.join(" ")
    : `0 0 ${props.width} ${props.height}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      preserveAspectRatio={aspectRatio}
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <use href={`#${prefix}-${props.id}`} />
    </svg>
  );
}

export { SvgComponent, SVGSource };
