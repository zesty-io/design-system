import React, { Component } from "react";
import { Card, CardHeader, CardContent } from "../Card";
import { Button } from "../Button";
import styles from "./ImageFieldType.less";

export class ImageFieldType extends Component {
  static defaultProps = {
    imageSelection: [],
    limit: 1,
    label: ""
  };
  mountModal = () => {
    riot.mount(document.querySelector("#modalMount"), "media-app-modal", {
      callback: this.handleImageSelectionChange
    });
  };
  handleImageSelectionChange = selection => {
    if (this.props.callback) {
      this.props.callback(selection);
    }
  };
  handleRemoveImage = id => {
    // remove the image from the image array
    const removed = this.props.imageSelection.filter(img => img.id !== id);
    return this.handleImageSelectionChange(removed);
  };
  render() {
    const { imageSelection, limit, label } = this.props;
    return (
      <React.Fragment>
        <label>{label}</label>
        <Card className={styles.ImageFieldType}>
          <CardHeader className={styles.ImageFieldTypeHeader}>
            <Button
              onClick={this.mountModal}
              text={`${imageSelection.length ? "Update" : "Add"} Images ${
                imageSelection.length
              }/${limit}`}
            />
            {/* <h3>Drop images here to upload them to your media</h3>
            <input type="file" className={styles.DropZone} /> */}
          </CardHeader>
          <CardContent className={styles.ImageFieldTypeContent}>
            {imageSelection &&
              imageSelection.map(img => {
                return (
                  <article key={img.id} className={styles.ImageItem}>
                    <img src={img.url} alt={img.title} />
                    <span className={styles.ImageName}>
                      {img.title}
                      <Button onClick={() => this.handleRemoveImage(img.id)}>
                        <i className="fa fa-times" />
                      </Button>
                    </span>
                  </article>
                );
              })}
          </CardContent>
        </Card>
      </React.Fragment>
    );
  }
}
