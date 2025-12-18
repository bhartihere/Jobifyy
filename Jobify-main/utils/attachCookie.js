const attachCookie = ({ res, token }) => {
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(Date.now() + oneDay),
  });
};


export default attachCookie;
