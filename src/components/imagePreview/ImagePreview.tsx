import Classes from "./ImagePreview.module.css";

interface ImagePreviewPropsInterface {
  src: string;
}
const ImagePreview: React.FC<ImagePreviewPropsInterface> = (props) => {
  const { src } = props;
  return (
    <div className={Classes.imagepreview_container}>
      <img src={src} className={Classes.imagepreview_image} />
    </div>
  );
};

export default ImagePreview;
