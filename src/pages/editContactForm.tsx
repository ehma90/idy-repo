import React, { FC } from "react";
import Label from "./reusable-components/label";
import Input from "./reusable-components/input";
import Button from "./reusable-components/button";
import { useRouter } from "next/router";

type Props = {
    phoneNumber: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
}

const EditContactForm: FC< Props> = ({
  phoneNumber,
  firstName,
  lastName,
}) => {
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/contact-lists");
  };
  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit}
        method="post"
        className=" space-y-4 max-w-2xl mx-auto"
      >
        <h1 className="text-2xl font-bold text-center">Edit Contact</h1>
        <div>
          <Label htmlFor="first_name">First name</Label>
          <Input
            type="text"
            name="first_name"
            id="first_name"
            inputSize="md"
            defaultValue={firstName}
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
            defaultValue={lastName}
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
            defaultValue={phoneNumber}
            placeholder="+234______"
            className="w-full mt-2"
            required
          />
        </div>

        <div className="mt-6 flex justify-center">
          <Button variant="primary" size="lg" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditContactForm;
