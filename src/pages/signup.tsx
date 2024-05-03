'use client'

import React from "react";
import Container from "./reusable-components/container";
import Label from "./reusable-components/label";
import Input from "./reusable-components/input";
import Button from "./reusable-components/button";
import Link from "next/link";
import { MdKeyboardBackspace } from "react-icons/md";

const SignupPage = () => {
  const handleSubmit = () => {};
  return (
    <Container className=" py-12 px-4">
      <form
        onSubmit={handleSubmit}
        method="post"
        className=" space-y-4 max-w-2xl mx-auto"
      >
        <Button size="sm" variant="primary" href="/">
          <MdKeyboardBackspace
            size={28}
            className=" text-white "
          />
        </Button>

        <h1 className="text-4xl font-bold text-center">Sign up</h1>
        <div>
          <Label htmlFor="first_name">First name</Label>
          <Input
            type="text"
            name="first_name"
            id="first_name"
            inputSize="md"
            placeholder="Enter your first name"
            className="w-full mt-2"
            required
          />
        </div>
        <div>
          <Label htmlFor="last_name">Last name</Label>
          <Input
            type="text"
            name="last_name"
            id="last_name"
            inputSize="md"
            placeholder="Enter your last name"
            className="w-full mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            name="email"
            id="email"
            inputSize="md"
            placeholder="youremail@example.com"
            className="w-full mt-2"
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="text"
            name="password"
            id="password"
            inputSize="md"
            placeholder="Enter password"
            className="w-full mt-2"
            required
          />
        </div>
        <div>
          <Label htmlFor="confirm_password">Confirm password</Label>
          <Input
            type="text"
            name="confirm_password"
            id="confirm_password"
            inputSize="md"
            placeholder="Confirm password"
            className="w-full mt-2"
            required
          />
        </div>
        <p className="pb-4 flex justify-end">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className=" text-gray-500 font-bold mx-1 hover:underline"
          >
            Log in
          </Link>
        </p>
        <div className="flex justify-center">
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default SignupPage;
