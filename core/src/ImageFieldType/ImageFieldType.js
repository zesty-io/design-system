import React, { Component, PureComponent } from "react";
import cx from "classnames";
import { Card, CardHeader, CardContent } from "../Card";
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
      <React.Fragment>
        <label>{this.props.label}</label>
        <Card className={styles.ImageFieldType}>
          <CardHeader className={styles.ImageFieldTypeHeader}>
            <Actions
              addImage={this.addImage}
              imageCount={this.props.images.length}
              limit={this.props.limit}
            />
          </CardHeader>
          <CardContent className={styles.ImageFieldTypeContent}>
            {/*
              <h3>Drop images here to upload them to your media</h3>
              <input type="file" className={styles.DropZone} />
            */}
            {this.props.images.map(ZUID => {
              return (
                <Image
                  imageZUID={ZUID}
                  width="200"
                  height="200"
                  removeImage={this.removeImage}
                />
              );
            })}
            {!this.props.images.length && (
              <h1 className={styles.NoImages}>No images have been selected</h1>
            )}
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}

class Actions extends PureComponent {
  render() {
    return (
      <Button
        kind={this.props.imageCount > this.props.limit ? "warn" : ""}
        onClick={() => {
          riot.mount(document.querySelector("#modalMount"), "media-app-modal", {
            callback: this.props.addImage
          });
        }}
        text={`Select Images (${this.props.imageCount}/${this.props.limit})`}
      />
    );
  }
}

class Image extends Component {
  render() {
    return (
      <figure className={styles.file}>
        <img
          className={styles.image}
          src={`${CONFIG.service.media_resolver}/resolve/${
            this.props.imageZUID
          }/getimage/?w=${this.props.width}&h=${this.props.height}&type=fit`}
        />
        <Button
          className={styles.remove}
          onClick={() => this.props.removeImage(this.props.imageZUID)}
        >
          <i className={cx(styles.icon, "fa fa-times")} />
        </Button>
      </figure>
    );
  }
}
