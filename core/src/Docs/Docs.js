import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../Button"

export function Docs(props) {

  function openDocs() {
    let url=`https://zesty.org/?q=${props.subject}`
    if(props.url){
      url = props.url
    }
    window.open(url, '_blank');
  }

  return (
    <Button title={`Open documentation for ${props.subject}`} size="small" kind="documentation" onClick={openDocs}>
      <FontAwesomeIcon icon={faBook} />
        Documentation
    </Button>
  );
}
