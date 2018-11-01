import React, { Component, PureComponent } from "react";
import cx from "classnames";
import { Card, CardHeader, CardContent, CardFooter } from "../Card";
import { Button } from "../Button";
import styles from "./ImageFieldType.less";

export class ImageFieldType extends Component {
  static defaultProps = {
    images: [], // Array of image ZUIDs
    limit: 1,
    label: ""
  };

  addImage = images => {
    const imageZUIDs = images.map(image => image.id);

    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        [...this.props.images, ...imageZUIDs].join(","),
        this.props.datatype
      );
    } else {
      throw new Error("missing remove image action");
    }
  };

  removeImage = ZUID => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.name,
        this.props.images.filter(image => image !== ZUID).join(","),
        this.props.datatype
      );
    } else {
      throw new Error("missing remove image action");
    }
  };

  render() {
    const { label, images, field, limit } = this.props;
    return (
      <React.Fragment>
        <label>{label}</label>
        <Card className={styles.ImageFieldType}>
          <CardContent className={styles.ImageFieldTypeContent}>
            {/*
              <h3>Drop images here to upload them to your media</h3>
              <input type="file" className={styles.DropZone} />
            */}
            {images.map((ZUID, i) => {
              return (
                <Image
                  key={i}
                  imageZUID={ZUID}
                  width="200"
                  height="200"
                  removeImage={this.removeImage}
                />
              );
            })}
            {!images.length && (
              <h1 className={styles.NoImages}>No media has been selected</h1>
            )}
          </CardContent>
          <CardFooter className={styles.ImageFieldTypeFooter}>
            <Actions
              {...this.props}
              field={field}
              addImage={this.addImage}
              imageCount={images.length}
              limit={limit}
            />
          </CardFooter>
        </Card>
      </React.Fragment>
    );
  }
}

class Actions extends PureComponent {
  render() {
    const { value, addImage, limit, imageCount, label } = this.props;
    const { datatypeOptions, name } = this.props.field;
    return (
      <Button
        kind={imageCount > limit ? "warn" : ""}
        onClick={() => {
          const optsObject = {
            callback: addImage,
            ids: value,
            limit,
            name,
            displayName: label
          };
          if (datatypeOptions && datatypeOptions.group_id) {
            optsObject.lock = datatypeOptions.group_id;
          }
          riot.mount(
            document.querySelector("#modalMount"),
            "media-app-modal",
            optsObject
          );
        }}
        text={`Select Media (${imageCount}/${limit})`}
      />
    );
  }
}

class Image extends Component {
  render() {
    const { removeImage, imageZUID, width, height } = this.props;
    return (
      <figure className={styles.file}>
        <img
          className={styles.image}
          src={`${
            CONFIG.service.media_resolver
          }/resolve/${imageZUID}/getimage/?w=${width}&h=${height}&type=fit`}
        />
        <Button
          className={styles.remove}
          onClick={() => removeImage(imageZUID)}
        >
          <i className={cx(styles.icon, "fa fa-times")} />
        </Button>
      </figure>
    );
  }
}
