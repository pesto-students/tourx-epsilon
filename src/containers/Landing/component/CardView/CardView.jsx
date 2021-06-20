/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { LocationOnRounded } from "@material-ui/icons";
import GradeIcon from "@material-ui/icons/Grade";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {
  CardWrapper,
  Image,
  Info,
  Title,
  Description,
  IconWrapper,
  Tag,
  // Icon,
  Text,
  Overlay,
} from "./Style";

function CardView({ item }) {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <CardWrapper>
      <Image
        //  img="img"
        component="img"
        alt="Contemplative Reptile"
        src={
          item.images[0] ||
          "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.5,f_auto,fl_progressive.strip_profile,g_center,h_183,q_auto,w_245/v1/filestore/nn4p0a4jw7b3ec7gdb35a4bfn7cu_1589461759_39784e54f69411e78a300a4cef95d023.png"
        }
        title="Contemplative Reptile"
      />
      <Overlay>
        <Info>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "space-between",
              minHeight: "220px",
            }}
          >
            <div>
              <Title>{item.title}</Title>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <VisibilityIcon
                  style={{ color: "white", marginRight: "8px" }}
                />
                <Description>{item.totalReviews}</Description>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "8px 0px",
                }}
              >
                <GradeIcon style={{ color: "yellow", marginRight: "8px" }} />
                <Tag>{item.rating}</Tag>
              </div>
              <IconWrapper>
                <LocationOnRounded
                  style={{
                    color: "white",
                    fontSize: isMobile ? "15px" : "20px",
                  }}
                />
                <Text>{item.subTitle}</Text>
              </IconWrapper>
            </div>
          </div>
        </Info>
      </Overlay>
    </CardWrapper>
  );
}

export default CardView;
