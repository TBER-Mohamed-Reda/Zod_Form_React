import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterSchemaType } from "../schema/RegisterSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "../../style.scss";

import ErrorAlert from "./ErrorAlert";
import { toast } from "react-toastify";

const Form = () => {
  const showToastMessage = () => {
    toast.success(
      "Congratulations, your account has been successfully created.",
      {
        position: toast.POSITION.BOTTOM_CENTER,
      }
    );
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {
    console.log(data);
    showToastMessage();
    reset();
  };

  return (
    <div className="form_wrapper">
      <div className="form_container">
        <div className="title_container">
          <h2>Registration Form</h2>
        </div>
        <div className="row clearfix">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input_field">
                {" "}
                <span>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    fade
                    size="sm"
                    style={{ color: "#000000", marginTop: "10px" }}
                  />
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
              </div>
              {errors.email && <ErrorAlert message={errors.email.message} />}
              <div className="input_field">
                {" "}
                <span>
                  <FontAwesomeIcon
                    icon={faLock}
                    fade
                    size="sm"
                    style={{ color: "#000000", marginTop: "10px" }}
                  />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
              </div>
              {errors.password && (
                <ErrorAlert message={errors.password.message} />
              )}
              <div className="input_field">
                {" "}
                <span>
                  <FontAwesomeIcon
                    icon={faLock}
                    fade
                    size="sm"
                    style={{ color: "#000000", marginTop: "10px" }}
                  />
                </span>
                <input
                  type="password"
                  placeholder="Re-type Password"
                  {...register("confirmPassword")}
                />
              </div>
              {errors.confirmPassword && (
                <ErrorAlert message={errors.confirmPassword.message} />
              )}
              <div className="row clearfix">
                <div className="col_half">
                  <div className="input_field">
                    {" "}
                    <span>
                      <span>
                        <FontAwesomeIcon
                          icon={faUser}
                          fade
                          size="sm"
                          style={{ color: "#000000", marginTop: "10px" }}
                        />
                      </span>
                    </span>
                    <input
                      type="text"
                      placeholder="First Name"
                      {...register("firstName")}
                    />
                  </div>
                  {errors.firstName && (
                    <ErrorAlert message={errors.firstName.message} />
                  )}
                </div>
                <div className="col_half">
                  <div className="input_field">
                    {" "}
                    <span>
                      <span>
                        <FontAwesomeIcon
                          icon={faUser}
                          fade
                          size="sm"
                          style={{ color: "#000000", marginTop: "10px" }}
                        />
                      </span>
                    </span>
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...register("lastName")}
                    />
                  </div>
                  {errors.lastName && (
                    <ErrorAlert message={errors.lastName.message} />
                  )}
                </div>
              </div>
              <div className="input_field checkbox_option">
                <input
                  type="checkbox"
                  id="checkbox"
                  {...register("acceptTerms")}
                />
                <label htmlFor="checkbox">
                  I agree with terms and conditions
                </label>
              </div>
              {errors.acceptTerms && (
                <ErrorAlert message={errors.acceptTerms.message} />
              )}
              <input className="button" type="submit" value="Register" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Form;
