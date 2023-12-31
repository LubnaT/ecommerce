import React from "react";
import { Grid,Box, Avatar, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container >
        <Grid item xs={1} sx={{paddingLeft:4}}>
          <Box>
            <Avatar
              classname="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#515574" }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9} sx={{textAlign:"left",paddingLeft:6}}>
          <div classname="space-y-2">
            <div>
              <p>Raam </p>
              <p>April 5, 2023</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating"/>
          <p>Nice Shirt, I love it </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
