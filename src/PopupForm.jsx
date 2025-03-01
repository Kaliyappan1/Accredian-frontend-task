import React from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { submitReferral } from './Services/ApiService';

const PopupForm = ({ open, onClose }) => {
  const validationSchema = Yup.object({
    yourName: Yup.string().required('Required'),
    yourEmail: Yup.string().email('Invalid email address').required('Required'),
    referralDetails: Yup.string(),
    refereeName: Yup.string().required('Required'),
    refereeEmail: Yup.string().email('Invalid email address').required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    // Handle form submission
    try {
      const response = await submitReferral(values);
      console.log('Referral submitted:', response);
      onClose(); // Close the dialog on successful submission
    } catch (error) {
      console.error('error submitting referrral :', error);
      setErrors({ general: 'Failed to submit referral' });
    } finally {
      setSubmitting(false);
      
    }
  
  };



  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Refer a Friend
        <Typography variant='caption' component="div" color={"gray"}>Fill out the form below to refer a friend and earn rewards.</Typography>
      </DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{
            yourName: '',
            yourEmail: '',
            referralDetails: '',
            refereeName: '',
            refereeEmail: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              {errors.general && (
                <Typography variant="body2" color="error">
                {errors.general}
              </Typography>
              )}
              <Field
                as={TextField}
                autoFocus
                margin="dense"
                name="yourName"
                label="Your Name"
                type="text"
                fullWidth
                variant="outlined"
                helperText={<ErrorMessage name="yourName" />}
               
              />
              <Field
                as={TextField}
                margin="dense"
                name="yourEmail"
                label="Your Email"
                type="email"
                fullWidth
                variant="outlined"
                helperText={<ErrorMessage name="yourEmail" />}
                
              />
              <Field
                as={TextField}
                margin="dense"
                name="referralDetails"
                label="Referral Details"
                type="text"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                helperText={<ErrorMessage name="referralDetails" />}
                
              />
              <Field
                as={TextField}
                margin="dense"
                name="refereeName"
                label="Referee Name"
                type="text"
                fullWidth
                variant="outlined"
                helperText={<ErrorMessage name="refereeName" />}
                
              />
              <Field
                as={TextField}
                margin="dense"
                name="refereeEmail"
                label="Referee Email"
                type="email"
                fullWidth
                variant="outlined"
                helperText={<ErrorMessage name="refereeEmail" />}
                
              />
              
              <DialogActions>
                <Button onClick={onClose} color="success">
                  Cancel
                </Button>
                <Button type="submit" color="success" disabled={isSubmitting}>
                  Submit Referral
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default PopupForm;
