import React, { Component, PureComponent, Fragment } from "react";
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
    return (
      <Fragment>
        <label className={styles.ImageFieldTypeLabel}>
          {this.props.label}
          {this.props.required && <span style={{ color: "#9a2803" }}>*</span>}
        </label>
        <p className={styles.Description}>{this.props.description}</p>
        <Card
          className={`${styles.ImageFieldType} ${
            this.props.images.length > this.props.limit ? styles.warn : ""
          }`}
        >
          <CardContent className={styles.ImageFieldTypeContent}>
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
            {!this.props.images.length && (
              <h1 className={styles.NoImages}>No media has been selected</h1>
            )}
          </CardContent>
          <CardFooter className={styles.ImageFieldTypeFooter}>
            <Fragment>
              <Button
                kind={this.props.images.length > this.props.limit ? "warn" : ""}
                onClick={() => {
                  console.log("Action", this.props);

                  riot.mount(
                    document.querySelector("#modalMount"),
                    "media-app-modal",
                    {
                      callback: this.addImage,
                      ids: this.props.value,
                      name: this.props.name,
                      displayName: this.props.label,
                      limit: this.props.limit,
                      lock: this.props.locked
                    }
                  );
                }}
                text={`Select Media (${this.props.images.length}/${this.props.limit})`}
              />
              {this.props.images.length > this.props.limit && (
                <p className={styles.warningText}>
                  You have selected more images than your limit allows
                </p>
              )}
            </Fragment>
          </CardFooter>
        </Card>
      </Fragment>
    );
  }
}

function Image(props) {
  return (
    <figure className={styles.file}>
      {props.imageZUID.substr(0, 4) === "http" ? (
        <img className={styles.image} src={props.imageZUID} />
      ) : (
        <img
          className={styles.image}
          src={`${CONFIG.service.media_resolver}/resolve/${props.imageZUID}/getimage/?w=${props.width}&h=${props.height}&type=fit`}
        />
      )}

      <Button
        className={styles.remove}
        onClick={() => props.removeImage(props.imageZUID)}
      >
        <i className={cx(styles.icon, "fa fa-times")} />
      </Button>
    </figure>
  );
}
