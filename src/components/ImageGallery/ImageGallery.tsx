/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { uuid } from "uuidv4";
import { useMediaQuery } from "@material-ui/core";
import data from "./data";
import {
  Container,
  LeftImage,
  ImageItem,
  SubGrid,
  SubItem,
  SubItemImg,
  SmImage,
  WrapperSm,
  Banner,
  ButtonLi,
  Span,
} from "./Style";
// import ImageGalleryProps from "./ImageGallery.interface";

const ImageGallery = ({ setState }: any) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      {isMobile === false && (
        <Container>
          <LeftImage>
            <ImageItem
              src={data[0]}
              alt="featured image"
              onClick={() => {
                setState({
                  isOpen: true,
                  index: 0,
                });
              }}
            />
          </LeftImage>
          <SubGrid>
            {data.slice(1).map((i, index) => {
              return (
                <SubItem>
                  <SubItemImg
                    src={i}
                    alt="grid image"
                    key={uuid()}
                    onClick={() => {
                      setState({
                        isOpen: true,
                        index: index + 1,
                      });
                    }}
                  />
                </SubItem>
              );
            })}
          </SubGrid>
        </Container>
      )}

      {isMobile && (
        <SmImage>
          <WrapperSm>
            <Banner src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_650,q_auto,w_576/v1/filestore/1yd9r3xzv2pmiw1w7shtprvwurtw_1590502616_serai_chik20.png" />
          </WrapperSm>
          <ButtonLi
            onClick={() => {
              setState({
                isOpen: true,
                index: 0,
              });
            }}
          >
            <Span />
            Gallery
          </ButtonLi>
        </SmImage>
      )}
    </>
  );
};

export default ImageGallery;
