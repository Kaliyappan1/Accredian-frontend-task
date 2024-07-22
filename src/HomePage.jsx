import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Icon, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import RedeemIcon from "@mui/icons-material/Redeem";
import RepeatIcon from "@mui/icons-material/Repeat";

function HomePage() {

  const [ open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = () => {
    handleClose();
  }

  const FeatureCard = ({ icon, title, description }) => (
    <Grid item xs={12} sm={6}>
      <Paper
        elevation={1}
        style={{
          padding: "20px",
          height: "100%",
          backgroundColor: "#673ab7",
          color: "white",
          border: "1px solid #673ab7",
          borderRadius: "8px",
        }}
      >
        <Box display="flex" alignItems="center" mb={2}>
          <Icon
            component={icon}
            style={{ fontSize: "40px", marginRight: "16px" }}
          />
          <Typography variant="h6">{title}</Typography>
        </Box>
        <Typography color={"lightgray"} variant="body2">
          {description}
        </Typography>
      </Paper>
    </Grid>
  );
  return (
    <div>
      <div className="homepage">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ height: "23pc" }}
        >
          <Box>
            <Typography
              sx={{ fontWeight: 800 }}
              color={"blueviolet"}
              align="center"
              variant="h2"
              component="h1"
              gutterBottom
            >
              Earn Rewards by Referring Friends
            </Typography>
            <Typography
              align="center"
              color={"gray"}
              variant="body1"
              gutterBottom
            >
              Invite your friends when they sign up. It's that simple!
            </Typography>
            <Typography align="center">
              <Button
                sx={{ m: 2, fontSize: 30 }}
                variant="contained"
                size="large"
                color="success"
                onClick={handleClickOpen}
                
              >
                Refer Now
              </Button>
            </Typography>
          </Box>
        </Grid>

        <Grid p={4}>
          <Typography variant="body1" gutterBottom>
            <Button disabled variant="outlined">
              How it Works
            </Button>
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 600 }} variant="h4" gutterBottom>
            Refer Your Friends, Earn Rewards
          </Typography>
          <Typography color={"gray"} variant="subtitle1" paragraph>
            Invite your friends to join our platform and earn cash rewards when
            they sign up. It's a win-win for everyone!
          </Typography>
          <Grid container spacing={3}>
            <FeatureCard
              icon={PermIdentityIcon}
              title="Refer a Friend"
              description="Share your unique referral link with your friends and family."
            />
            <FeatureCard
              icon={AttachMoneyIcon}
              title="Earn Rewards"
              description="Earn cash rewards when your friends sign up and use our platform."
            />
            <FeatureCard
              icon={RedeemIcon}
              title="Enjoy the Benefits"
              description="Use your earned rewards to unlock exclusive features or redeem for cash."
            />
            <FeatureCard
              icon={RepeatIcon}
              title="Refer More, Earn more"
              description="The more friends you refer, the more rewards you can earn."
            />
          </Grid>
        </Grid>
        
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Refer a Friend
        <Typography color={"gray"} component="div" variant="caption">Fill out the form below to refer a friend and earn rewards.</Typography>
        </DialogTitle>
        <DialogContent color="success">
          
          <TextField
            autoFocus
            margin="dense"
            label="Your Name"
            type="text"
            fullWidth
            variant="outlined"
            color="success"
          />
          <TextField
            margin="dense"
            label="Your Email"
            type="email"
            fullWidth
            variant="outlined"
            color="success"
          />
          <TextField
            margin="dense"
            label="Referral Details"
            type="text"
            fullWidth
            variant="outlined"
            color="success"
            multiline
            rows={4}
          />
          <TextField
            margin="dense"
            label="Referee Name"
            type="text"
            fullWidth
            variant="outlined"
            color="success"
          />
          <TextField
            margin="dense"
            label="Referee Email"
            type="email"
            fullWidth
            variant="outlined"
            color="success"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="success">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="success">
            Submit Referral
          </Button>
        </DialogActions>
      </Dialog>
       
      </div>
    </div>
  );
}

export default HomePage;
