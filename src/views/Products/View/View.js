import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Row } from 'reactstrap';

const items = [
  {
    src: 'http://sastabazzar.in/wp-content/uploads/2017/05/banner_12.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
  },
   {
    src: 'https://s3.envato.com/files/258408379/discount-offer-banner-title_Preview.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
  },
  {
    src: 'https://thumbs.dreamstime.com/t/easter-sale-shopping-special-offer-decorated-colorful-egg-holiday-banner-flat-vector-illustration-87268375.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
  },
];

class View extends Component {
   constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    // const slides = items.map((item) => {
    //   return (
    //     <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src}>
    //       <img className="d-block w-100" src={item.src} alt={item.altText} />
    //     </CarouselItem>
    //   );
    // });

    const slides2 = items.map((item) => {
      return (
        <CarouselItem
        className="custom-tag"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img className="d-block w-100" src={item.src}  />
          <CarouselCaption  />
        </CarouselItem>
      );
    });

    return (
      <div className="animated fadeIn">
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 300px;
               //background: black;
            }`
        }
      </style>
        <Row>
          <Col xl="12" fluid={true}>
                <Carousel  activeIndex={activeIndex} next={this.next} previous={this.previous}>
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                  {slides2}
                  <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                  <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
          </Col>
        </Row>
        <div style={{marginTop:"15px"}}> 
              <h5><b>Best Selling Items</b></h5><p style={{marginLeft:"1%"}}/>
        <Col xs="12" sm="6" lg="3">
            <Card >
              <CardBody className="pb-0">
              <img src="https://cdn.grofers.com/app/images/products/normal/pro_52.jpg?ts=1565763930" className="img-avatar" alt="Account" width="100%"/><br/>
              <div style={{textAlign:"center", fontWeight:"bold"}}>Fortune Soya Health Refined Soyabean Oil (Pouch)</div>
               <div style = {{flexItems: 2, 'flex-direction': 'row',
      'justify-content': 'space-between'}}>
                    <div>
                    <div>₹93</div>
                    </div>
                    <div style = {{flex:1, justifyContent:'flex-end'}}>
                    <img src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png" alt="Account" width="20%"/><br/>
                    </div>
                </div> 
              </CardBody>
              <br/>
            </Card>
          </Col>
          </div>
      </div>
    );
  }
}

export default View;
