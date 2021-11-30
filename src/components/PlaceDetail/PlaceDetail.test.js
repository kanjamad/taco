import PlaceDetail from "./PlaceDetails";
it("renders correctly", () => {
  const wrapper = shallow(
    <PlaceDetail
      place="San Jose"
      lat="41.0938"
      handleButtonPress={() => {}}
      setModalShow={() => {}}
    />
  );
  expect(wrapper).toMatchInlineSnapshot(`
    <div>
      <Row
        style={
          Object {
            "width": "100%",
          }
        }
      >
        <Col
          md={4}
          xs={12}
        >
          <Card
            body={false}
          >
            <CardBody>
              <Row>
                <Col>
                  <CardTitle />
                </Col>
                <Col>
                  <CardText>
                    NaN
                     miles
                  </CardText>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CardText>
                    <p>
                       
                      <br />
                      , 
                       
                    </p>
                    <p
                      className="text-success"
                    >
                       
                      Open today until 
                       
                    </p>
                  </CardText>
                </Col>
                <Col />
              </Row>
              <Row>
                <Col>
                  <Button
                    active={false}
                    disabled={false}
                    onClick={[Function]}
                    variant="secondary"
                  >
                    DIRECTIONS
                  </Button>
                </Col>
                <Col>
                  <Button
                    active={false}
                    disabled={false}
                    onClick={[Function]}
                    variant="secondary"
                  >
                    MORE INFO
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <MoreInfo
            onHide={[Function]}
            place="San Jose"
            show={false}
          />
        </Col>
        <Col
          md={8}
          xs={12}
        >
          <Mapapi
            place="San Jose"
            show={false}
          />
        </Col>
      </Row>
    </div>
  `);
});

it("renders correctly again", () => {
  const wrapper = render(
    <PlaceDetail
      place="San Jose"
      lat="41.0938"
      handleButtonPress={() => {}}
      setModalShow={() => {}}
    />
  );
  expect(wrapper).toMatchInlineSnapshot(`
    <div>
      <div
        class="row"
        style="width:100%"
      >
        <div
          class="col-md-4 col-12"
        >
          <div
            class="card"
          >
            <div
              class="card-body"
            >
              <div
                class="row"
              >
                <div
                  class="col"
                >
                  <div
                    class="card-title h5"
                  />
                </div>
                <div
                  class="col"
                >
                  <p
                    class="card-text"
                  >
                    NaN miles
                  </p>
                </div>
              </div>
              <div
                class="row"
              >
                <div
                  class="col"
                >
                  <p
                    class="card-text"
                  />
                  <p>
                     
                    <br />
                    ,  
                  </p>
                  <p
                    class="text-success"
                  >
                     Open today until  
                  </p>
                  <p />
                </div>
                <div
                  class="col"
                />
              </div>
              <div
                class="row"
              >
                <div
                  class="col"
                >
                  <button
                    class="btn btn-secondary"
                    type="button"
                  >
                    DIRECTIONS
                  </button>
                </div>
                <div
                  class="col"
                >
                  <button
                    class="btn btn-secondary"
                    type="button"
                  >
                    MORE INFO
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-8 col-12"
        >
          Loading...
        </div>
      </div>
    </div>
  `);
});

it("calls setModalShow on click", () => {
  const spy = sinon.spy();
  const wrapper = mount(<PlaceDetail place="San Jose" setModalShow={spy} />);
  wrapper.find("div").first().simulate("click");
  expect(spy.calledTwice).toBe(true);
});
