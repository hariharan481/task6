import React from 'react';
import { Button, Divider, Grid, Typography } from '@mui/material';
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const Header2 = () => {
  const headerStyle = {
    backgroundColor: 'black',
    padding: '40px',
    color: 'white',
    display: 'flex',
  };
  const buttonGroupStyle = {
    display: 'flex',
    gap: '30px',
    color: "white",
    marginTop: "30px",
    texttransform:"none",
    borderRadius: "60px",
  };

  return (
    <div style={{ overflow: 'hidden' ,borderTop:"0.5px solid white"}}>
      <Grid container spacing={3} style={headerStyle}>
        <Grid item xs={12}>
          <Typography variant="caption" color="gray">
            The price for the Ai Pin Complete System starts at $699. Taxes and fees not included. Ai Pin requires an active subscription. $24/month, taxes and fees not included, subscription automatically renews until cancelled. For more information, review https://hu.ma.ne/subscription. Ai Pin Complete System includes Ai Pin, Charge Case, Charge Pad, USB-C Adapter, Cable, and two Battery Boosters.
          </Typography>
        </Grid>
        <Divider sx={{ backgroundColor: 'white' }} />
        <Grid item xs={12} md={6}>
          <Typography variant="h4" color="gray">
            Stay connected and informed about the latest from Humane.
          </Typography>
          <Button sx={{
            textTransform:"none",background:"black",
            border:"0.1px solid white",'&:hover': {
                cursor: 'default',
                backgroundColor: "grey"
            },
          }} style={buttonGroupStyle} variant='contained'>Sign up for updates</Button>
        </Grid>
        <Grid container item spacing={3}  >
          <Grid item xs={12} md>
            <Typography variant="body2" color="gray">
              Join Us
            </Typography>
            <Typography variant="body2" color="gray">
              Media Kit
            </Typography>
            <Typography variant="body2" color="gray">
              Subscription
            </Typography>
            <Typography variant="body2" color="gray">
              Warranty
            </Typography>
            <Typography variant="body2" color="gray">
              Return Policy
            </Typography>
            <Typography variant="body2" color="gray">
              Terms of Service
            </Typography>
          </Grid>
          <Grid container item spacing={3} xs={12} md>
            <Grid item>
              <Twitter />
            </Grid>
            <Grid item>
              <LinkedIn />
            </Grid>
            <Grid item>
              <Instagram />
            </Grid>
            <Grid item>
              <GitHub />
            </Grid>
          </Grid>
          <Grid item xs={12} md>
            <Typography variant="body2" color="gray">
              © Humane Inc. 2024 All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Header2;
