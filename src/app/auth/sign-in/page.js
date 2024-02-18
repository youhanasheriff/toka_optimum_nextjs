"use client";

import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

import images from "@/assets/image";
import styles from "../auth.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const navigate = useRouter();
  const [showPassword, setShowPassword] = useState(false);


  return <main className={styles.main}>
    <img src={images.bg.bg.src} alt="bg"/>
    <div className={styles.form}>
      <div className={styles.logo}>
        <div></div>
      </div>
      <p className={styles.title}>
        Log in
      </p>
      <p className={styles.subtitle}>
        Don't have an account? 
        <span 
          onClick={() => {
            navigate.push("/auth/sign-up");
          }}
        >
          Sign Up
        </span>
      </p>
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

      <button className={styles.button} type="submit">Sign In</button>
    </div>
  </main>;
};

export default SignIn;
