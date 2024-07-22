import axios from 'axios';

export const submitReferral = async (referralData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/referrals', referralData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit referral');
  }
};
