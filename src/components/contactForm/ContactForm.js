import React from "react";

export const ContactForm = ({
  name,
  phone,
  email,
  handleSubmit,
  handleChange
}) => {
  return (
    <form method="post" action="" onSubmit={handleSubmit}>
      Name
      <input name="name" value={name} onChange={handleChange} required/>
      Phone
      <input name="phone" value={phone} pattern="((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}" onChange={handleChange} required/>
      Email
      <input type="email" name="email" value={email} onChange={handleChange} required/>
      <input type="submit" value="Submit" />
    </form>
  );
};