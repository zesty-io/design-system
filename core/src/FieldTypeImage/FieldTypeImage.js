import React, { Fragment } from "react";
import cx from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";

import { Card, CardContent } from "../Card";
import { Button } from "../Button";
import { FieldLabel } from "../FieldLabel";
import { FieldDescription } from "../FieldDescription";

import styles from "./FieldTypeImage.less";
export class FieldTypeImage extends React.PureComponent {
  static defaultProps = {
    images: [], // Array of image ZUIDs
    limit: 1,
    label: ""
  };

  addImage = images => {
    const imageZUIDs = images.map(image => image.id);

    if (this.props.onChange) {
      this.props.onChange(
        [...this.props.images, ...imageZUIDs].join(","),
        this.props.name,
        this.props.datatype
      );
    } else {
      throw new Error("missing remove image action");
    }
  };

  removeImage = ZUID => {
    if (this.props.onChange) {
      this.props.onChange(
        this.props.images.filter(image => image !== ZUID).join(","),
        this.props.name,
        this.props.datatype
      );
    } else {
      throw new Error("missing remove image action");
    }
  };

  render() {
    // console.log("FieldTypeImage:render");

    const maxImages = this.props.limit || 1;
    const imageCount = this.props.images.length;

    return (
      <Fragment>
        <label htmlFor={this.props.name}>
          <FieldLabel
            label={this.props.label}
            required={this.props.required}
            tag={this.props.tag}
            maxLength={maxImages}
            valueLength={imageCount}
            tooltip={this.props.tooltip}
          />
        </label>

        {imageCount > maxImages && (
          <p className={styles.WarningMsg}>
            This field is limited to {maxImages}{" "}
            {maxImages > 1 ? "images" : "image"}
          </p>
        )}

        <Card
          className={`${styles.FieldTypeImage} ${
            imageCount > maxImages ? styles.warn : ""
          }`}
        >
          <CardContent className={styles.FieldTypeImageContent}>
            {/*
              <h3>Drop images here to upload them to your media</h3>
              <input type="file" className={styles.DropZone} />
            */}
            {this.props.images.map((ZUID, i) => {
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

            {new Array(Math.max(0, maxImages - imageCount))
              .fill(0)
              .map((el, i) => (
                <ImageSkeleton
                  key={i}
                  {...this.props}
                  addImage={this.addImage}
                />
              ))}
          </CardContent>
        </Card>

        <FieldDescription description={this.props.description} />
      </Fragment>
    );
  }
}

function Image(props) {
  return (
    <figure className={styles.File}>
      {props.imageZUID.substr(0, 4) === "http" ? (
        <img className={styles.image} src={props.imageZUID} />
      ) : (
        <img
          className={styles.image}
          src={`${CONFIG.SERVICE_MEDIA_RESOLVER}/resolve/${props.imageZUID}/getimage/?w=${props.width}&h=${props.height}&type=fit`}
        />
      )}

      <Button
        className={styles.remove}
        onClick={() => props.removeImage(props.imageZUID)}
      >
        <FontAwesomeIcon icon={faTimes} className={styles.icon} />
      </Button>
    </figure>
  );
}

function ImageSkeleton(props) {
  return (
    <figure className={cx(styles.File, styles.FileSkeleton)}>
      <Button
        onClick={() => {
          riot.mount(document.querySelector("#modalMount"), "media-app-modal", {
            callback: props.addImage,
            ids: props.value,
            name: props.name,
            displayName: props.label,
            limit: props.limit,
            lock: props.locked
          });
        }}
      >
        <FontAwesomeIcon icon={faPlus} className={styles.icon} />
      </Button>
    </figure>
  );
}
