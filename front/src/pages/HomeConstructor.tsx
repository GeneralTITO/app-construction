import React, { useState } from "react";
import { Button, ButtonGroup, Container, Typography } from "@mui/material";

export const HomeConstructor: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  const handleButtonClick = (buttonIndex: number) => {
    setSelectedButton(buttonIndex === selectedButton ? null : buttonIndex);
  };

  const renderContent = () => {
    if (selectedButton === 0) {
      return <Typography>Conteúdo do Botão 1</Typography>;
    } else if (selectedButton === 1) {
      return <Typography>Conteúdo do Botão 2</Typography>;
    } else if (selectedButton === 2) {
      return <Typography>Conteúdo do Botão 3</Typography>;
    } else {
      return (
        <Typography>Selecione um botão para renderizar conteúdo.</Typography>
      );
    }
  };

  return (
    <Container>
      <ButtonGroup fullWidth>
        <Button
          variant={selectedButton === 0 ? "contained" : "outlined"}
          onClick={() => handleButtonClick(0)}
        >
          Em andamento
        </Button>
        <Button
          variant={selectedButton === 1 ? "contained" : "outlined"}
          onClick={() => handleButtonClick(1)}
        >
          Criar pregão
        </Button>
        <Button
          variant={selectedButton === 2 ? "contained" : "outlined"}
          onClick={() => handleButtonClick(2)}
        >
          Finalizados
        </Button>
      </ButtonGroup>
      <div style={{ marginTop: "20px" }}>{renderContent()}</div>
    </Container>
  );
};