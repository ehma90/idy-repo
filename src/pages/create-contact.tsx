"use client"
import React from "react";
import Container from "./reusable-components/container";
import Label from "./reusable-components/label";
import Input from "./reusable-components/input";
import Button from "./reusable-components/button";
import { useRouter } from "next/router";

const CreateContact = () => {
    const router = useRouter()
  const handleSubmit = (e:any) => {
    e.preventDefault()
    router.push('/contact-lists')
  };

  return (
    <Container className="py-12 px-4">
      <div className="py-2"></div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className=" space-y-4 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center">Create Contact</h1>
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
          <Label htmlFor="phone_number">Phone number</Label>
          <Input
            type="text"
            name="phone_number"
            id="phone_number"
            inputSize="md"
            placeholder="youremail@example.com"
            className="w-full mt-2"
            required
          />
        </div>

        <div className="flex justify-center">
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default CreateContact;
