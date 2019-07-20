import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { FaWindowClose } from 'react-icons/fa';
import SimpleCodeEditor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';


function PastebinFile({
  name,
  contents,
  canRemove,
  remove,
  setName,
  setContents,
}) {
  return (
    <div>
      <Form.Group>
        <Form.Label>Filename</Form.Label>
        <Form.Control type="text" value={name} onChange={setName} />
      </Form.Group>

      <SimpleCodeEditor
        value={contents}
        padding={10}
        highlight={code => highlight(code, languages.js)}
        onValueChange={setContents}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          border: '1px solid black',
        }}
      />

      {canRemove && (
        <button type="button" onClick={remove}>
          <FaWindowClose />
        </button>
      )}

      <style jsx>
        {`
          div {
            position: relative;
          }

          div:not(:first-child) {
            margin-top: 1em;
          }

          button {
            position: absolute;
            top: 0;
            right: 4px;
            opacity: .2;
            transition: opacity .3s linear;
            padding: 0;
            border: 0;
            background: transparent;
            color: #f00;
          }

          button:hover {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}


PastebinFile.propTypes = {
  name: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  canRemove: PropTypes.bool.isRequired,
  remove: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setContents: PropTypes.func.isRequired,
};


export default PastebinFile;
