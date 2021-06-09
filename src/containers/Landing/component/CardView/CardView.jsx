/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import { LocationOnRounded } from "@material-ui/icons";
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

function CardView() {
  return (
    <CardWrapper>
      <Image
        //  img="img"
        component="img"
        alt="Contemplative Reptile"
        src="https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.5,f_auto,fl_progressive.strip_profile,g_center,h_183,q_auto,w_245/v1/filestore/nn4p0a4jw7b3ec7gdb35a4bfn7cu_1589461759_39784e54f69411e78a300a4cef95d023.png"
        title="Contemplative Reptile"
      />
      <Overlay>
        <Info>
          <Title>Bangalow</Title>
          <Description>Some Good Area</Description>
          <Tag>245 Rooms</Tag>
          <IconWrapper>
            <LocationOnRounded style={{ color: "white", fontSize: "20px" }} />
            <Text>Kerala</Text>2
          </IconWrapper>
        </Info>
      </Overlay>
    </CardWrapper>
  );
}

export default CardView;
