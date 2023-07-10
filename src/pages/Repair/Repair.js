import { useDispatch, useSelector } from "react-redux";
import { fetchTelephones } from "../../redux/telephones/phones-operations";
import { useEffect, useState } from "react";
import ListRepair from "../../components/ListRapair/ListRepair";
import {
  findFinishPhones,
  getPhones,
  getTypesPhone,
} from "../../redux/telephones/phones-selector";
import { Container } from "./Repair.styled";
import Button from "@mui/material/Button";
import { Stack } from "@mui/joy";
import ListRepairFinish from "../../components/ListRapair/ListRepairFinish/ListRepairFinish";
import EmptyText from "../../components/EmptyText/EmptyText";
import Filter from "../../components/Filter/Filter";

const Repair = () => {
  const dispatch = useDispatch();
  const { repairs, diagnosis, purchases } = useSelector(getTypesPhone);
  const [showRepair, setShowRepair] = useState(false);

  const [showFinishRepair, setShowFinishRepair] = useState(false);
  const { filteredRepairs } = useSelector(findFinishPhones);
  const handleClickFinishRepair = () => {
    if (showRepair) {
      setShowFinishRepair(!showFinishRepair);
      setShowRepair(!showRepair);
    }
    setShowFinishRepair(!showFinishRepair);
  };

  const handleClickRepair = () => {
    if (showFinishRepair) {
      setShowFinishRepair(!showFinishRepair);
      setShowRepair(!showRepair);
    }
    setShowRepair(!showRepair);
  };

  // console.log(repair);
  console.log(repairs);
  console.log(diagnosis);

  return (
    <Container>
      <Stack spacing={2}>
        {/* <Button
          onClick={handleClickDiagnosis}
          style={{ width: "100%" }}
          variant="contained"
          color="success"
        >
          Діагностика
        </Button>
        <Button style={{ width: "100%" }} variant="contained" color="success">
          Виконана діагностика
        </Button> */}
        <Button
          onClick={handleClickRepair}
          style={{ width: "100%" }}
          variant="contained"
          color="success"
        >
          Ремонт
        </Button>
        <Button
          onClick={handleClickFinishRepair}
          style={{ width: "100%" }}
          variant="contained"
          color="success"
        >
          Виконаний ремонт
        </Button>
      </Stack>
      {showRepair &&
        (repairs.start.length === 0 ? (
          <EmptyText text={"Телефонів на ремонті не має"} />
        ) : (
          <ListRepair textStatus="В ремонті" phones={repairs.start} />
        ))}
      {showFinishRepair &&
        (repairs.finish.length === 0 ? (
          <EmptyText text={"Відремонтованих телефонів немає"} />
        ) : (
          <>
            {" "}
            <Filter />
            <ListRepairFinish
              textStatus="Ремонт закінчено"
              phones={filteredRepairs}
            />
          </>
        ))}
    </Container>
  );
};

export default Repair;
