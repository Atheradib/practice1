import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { Languages } from "./Languages/Languages";
import "./Dictionary.css";
import { Synonyms } from "./Synonyms/Synonyms";
import axios from "axios";
import { MeaningList } from "./Meaning/MeaningList";
import { Pronunciation } from "./Pronunciation/Pronunciation";

export const Dictionary = () => {
  const [resData, setResData] = useState([]);
  const [wordSearch, setWordSearch] = useState("");
  const handleSearch = (e) => {
    if (e.code === "Enter" || e.type === "click") {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordSearch}`)
        .then((res) => {
          console.log(res.data);
          setResData([...res.data]);
        });
    }
  };

  return (
    <div>
      <Card className="Dict">
        <Row>
          <Col md={1}></Col>
          <Col md={5}>
            <Form.Control
              type="text"
              placeholder="Search"
              onChange={(e) => setWordSearch(e.target.value)}
              onKeyPress={handleSearch}
            ></Form.Control>
          </Col>
          <Col md={1}>
            <Button onClick={handleSearch}>Search</Button>
          </Col>
          <Col md={2}>
            <Languages />
          </Col>

          <Col md={1}></Col>
        </Row>

        <Row>
          {resData.length > 0 && <Pronunciation pData={resData[0].phonetics} />}
        </Row>

        <Row>
          <Col md={1}></Col>
          <Col md={6}>
            {resData.map(
              (item) => item.meanings.length > 0 && <MeaningList item={item} />
            )}
          </Col>
          <Col md={4}>
            {resData.length > 0 && (
              <Synonyms sData={resData[0].meanings[0].definitions[0]} />
            )}
          </Col>
          <Col md={1}></Col>
        </Row>
      </Card>
    </div>
  );
};
