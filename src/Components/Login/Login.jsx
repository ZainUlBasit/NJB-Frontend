import React from "react";
import njb1 from "../../assets/images/njb1.png";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {/* Main Wrapper */}
      <div className="h-screen flex justify-center items-center bg-[aliceblue]">
        {/* Inner Wrapper */}
        <div className="border-y-[4px] w-[400px] border-[#03045e] bg-white rounded-t-[5px] rounded-b-[5px] mt-[0px]">
          {/* Header */}
          <div className="flex flex-col w-full justify-center items-center mt-[0px] mb-[5px]">
            <img src={njb1} alt="Img not found" width={300} />
            <span className="font-[raleway] font-[600] text-[2rem] text-[#03045e]">
              Welcome Back
            </span>
          </div>
          {/* Form */}
          <form className="mb-[15px]">
            {/* email */}
            <div className="flex flex-col w-full justify-center items-center">
              <TextField
                id="outlined-password-input"
                label="Email"
                type="email"
                sx={{ m: 1, width: "38ch", mb: "15px" }}
                required
                className="mb-[10px]"
              />
              {/* password */}
              <FormControl sx={{ m: 1, width: "38ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  required
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
            {/* Buttons */}
            <div className="flex justify-center items-center mt-[15px]">
              <button className="bg-[#0077b6] text-white w-[300px] py-[8px] font-[raleway] uppercase font-[700] text-[1.3rem] hover:bg-[#00b4d8] transition-all duration-500 hover:rounded-[8px]">
                Login
              </button>
            </div>
          </form>
          <div className="w-full flex justify-center items-center">
            <div className="w-[30%] h-[2px] bg-[#5a4ae3]"></div>
            <div className="w-[10%] text-center font-[raleway] font-bold text-[#03045e]">
              OR
            </div>
            <div className="w-[30%] h-[2px] bg-[#5a4ae3]"></div>
          </div>
          <div className="flex justify-center items-center font-[raleway] font-bold mt-[5px] mb-[30px]">
            <Link className="text-[#03045e]">Forget Password?</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
