import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [planets, setPlanets] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets/");
        const planetsData = await response.json();
        setPlanets(planetsData.results);
      } catch (error) {
        console.error("Error fetching planets:", error);
      }
    };

    const fetchStarships = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/starships/");
        const starshipsData = await response.json();
        setStarships(starshipsData.results);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };

    fetchPlanets();
    fetchStarships();
  }, []);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      console.log("Login successfull!:", values);
      onLogin(values.username);
      navigate("/");
    } catch (error) {
      console.error("Error during login API:", error);
      message.error("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form className="form" onFinish={onFinish} layout="vertical">
      <Form.Item
        className="box"
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        className="box"
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        className="box"
        label="Select your favorite Planet"
        name="planet"
        rules={[{ required: false, message: "Please select a planet!" }]}
        initialValue=""
      >
        <select className="box">
          <option value="">Select a planet</option>
          {planets.map((planet) => (
            <option key={planet.name} value={planet.name}>
              {planet.name}
            </option>
          ))}
        </select>
      </Form.Item>
      <Form.Item
        className="box"
        label="Select your favorite Starship"
        name="starship"
        rules={[{ required: false, message: "Please select a starship!" }]}
        initialValue=""
      >
        <select className="box">
          <option value="">Select a starship</option>
          {starships.map((starship) => (
            <option key={starship.name} value={starship.name}>
              {starship.name}
            </option>
          ))}
        </select>
      </Form.Item>
      <Form.Item>
        <Button className="login" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
