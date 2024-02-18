"use client";

import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

import images from "@/assets/image";
import styles from "../auth.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { FormCheck } from "react-bootstrap";

const SignUp = () => {
  const navigate = useRouter();
  const [showPassword, setShowPassword] = useState(false);


  return <main className={styles.main}>
    <img src={images.bg.bg.src} alt="bg"/>
    <div className={styles.form}>
      <div className={styles.logo}>
        <div></div>
      </div>
      <p className={styles.title}>
        Sign Up
      </p>
      <p className={styles.subtitle}>
        Do you have an account? 
        <span 
          onClick={() => {
            navigate.push("/auth/sign-in");
          }}
        >
          Sign In
        </span>
      </p>
      <Form.Label htmlFor="firstName">First Name</Form.Label>
      <Form.Control
        type="firstName"
        id="firstName"
      />
      <Form.Label htmlFor="lastName">Last Name</Form.Label>
      <Form.Control
        type="lastName"
        id="lastName"
      />
      <Form.Label htmlFor="email">E-Mail</Form.Label>
      <Form.Control
        type="email"
        id="email"
      />
      <div className={styles.password_label}>
        <Form.Label htmlFor="password">Password</Form.Label>
        <FontAwesomeIcon
          className={styles.eye}
          icon={showPassword
            ? faEyeSlash
            : faEye} 
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      <Form.Control
        type={showPassword ? "text" : "password"}
        id="password"
      />

      <button className={styles.button} type="submit">Create an account</button>
      <FormCheck className={styles.agreement}>
        <FormCheck.Input type="checkbox" id="checkbox" />
        <FormCheck.Label htmlFor="checkbox">
          I agree to the terms and conditions
        </FormCheck.Label>
      </FormCheck>
    </div>
  </main>;
};

export default SignUp;
