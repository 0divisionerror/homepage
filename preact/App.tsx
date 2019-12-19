import { FunctionalComponent, h } from "/homepage/web_modules/preact.js";
import {
  useEffect,
  useRef,
  useState
} from "/homepage/web_modules/preact/hooks.js";

import ThreeViewer from "./three/viewer.js";

const App: FunctionalComponent = () => {
  const [progress, setProgress] = useState(0);

  const isLoading = progress > 0 && progress < 100;

  const divRef = useRef<HTMLDivElement>();
  const viewerRef = useRef(new ThreeViewer());
  const viewer = viewerRef.current;

  useEffect(() => {
    viewer.start(divRef.current!);
    viewer.loadFbx(setProgress);

    window.addEventListener("resize", viewer.resize);
    return () => {
      window.removeEventListener("resize", viewer.resize);
    };
  }, []);

  const onOtohime = () => {
    if (!isLoading) viewer.loadVrm(setProgress);
  };

  const onCuring = () => {
    if (!isLoading) viewer.loadFbx(setProgress);
  };

  return (
    <div style={{ width: "100%" }}>
      <p>おとひめ.vrm</p>
      <a
        href="https://3d.nicovideo.jp/works/td41391"
        target="_blank"
        rel="noopener noreferrer"
        style={{ wordWrap: "break-word" }}
      >
        https://3d.nicovideo.jp/works/td41391
      </a>
      <br />
      <div style={{ display: "flex" }}>
        <button onClick={onOtohime}>おとひめ</button>
        <button onClick={onCuring}>うんちかーりんぐ</button>
      </div>
      {isLoading && <p>Now Loading {progress}%</p>}
      <div ref={divRef} />
    </div>
  );
};

export default App;
