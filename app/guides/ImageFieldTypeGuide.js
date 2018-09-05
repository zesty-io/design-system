import React, { Component } from 'react'

import { ImageFieldType } from '@zesty-io/core/dist/ImageFieldType'
import GithubEmbed from '../components/githubembed'
import { CollapsibleCard } from '@zesty-io/core/dist/CollapsibleCard'

export class ImageFieldTypeGuide extends Component {
  state = {
    imageSelection: [
      {
        id: '123',
        title: 'Image.png',
        url:
          'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit'
      },
      {
        id: '1223',
        title: 'Image2.png',
        url:
          'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit'
      }
    ]
  }
  handleImages = images => {
    this.setState({ imageSelection: images })
  }
  render() {
    return (
      <React.Fragment>
        <p>Text field for manager app that allows custom character limit</p>
        <p>Props: label, charCount</p>
        <br />
        <ImageFieldType
          imageSelection={this.state.imageSelection}
          callback={this.handleImages}
          label="Title Field"
          limit="4"
        />
        <br />
        <CollapsibleCard header="Usage" open>
          <GithubEmbed
            height="50px"
            code={`<ImageFieldType
  default={[
    {
      id: '123',
      title: 'Image.png',
      url:
        'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit'
    },
    {
      id: '1223',
      title: 'Image2.png',
      url:
        'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit'
    }
  ]}
  callback={console.log}
  label="Title Field"
  charCount="150"
/>`}
          />
        </CollapsibleCard>
        <CollapsibleCard header="Code" collapsed>
          <GithubEmbed
            code={`<ImageFieldType
  default={[
    {
      id: '123',
      title: 'Image.png',
      url:
        'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit'
    },
    {
      id: '1223',
      title: 'Image2.png',
      url:
        'https://svc.zesty.io/media-resolver-service/resolve/3-6b41e77-mtnnv/getimage/?w=199&h=200&type=fit'
    }
  ]}
  callback={console.log}
  label="Title Field"
  charCount="150"
/>`}
          />
        </CollapsibleCard>
      </React.Fragment>
    )
  }
}
