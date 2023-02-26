import { Grid } from "@mui/material";
import "./App.css";
import AuxButton from "./components/AuxButton";
import InputBar from "./components/InputBar";
import NumButton from "./components/NumButton";
import OperButton from "./components/OperButton";

function App() {
  const values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  const aux = ["AC", "+/-", "%"];
  const operations = ["/", "*", "-", "+", "="];
  return (
    <div className="App">
      <Grid container style={{ width: "75%", margin: "20px auto" }}>
        <Grid item xs={12}>
          <InputBar />
        </Grid>
        <Grid item container xs={9}>
          <Grid item container>
            {aux.map((value) => {
              return (
                <Grid item xs={4} key={value}>
                  <AuxButton value={value} />
                </Grid>
              );
            })}
          </Grid>
          <Grid item container>
            {values.map((value) => {
              return (
                <Grid item xs={value === "0" ? 8 : 4} key={value}>
                  <NumButton value={value} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item container xs={3}>
          <Grid item container>
            {operations.map((value) => {
              return (
                <Grid item xs={12} key={value}>
                  <OperButton value={value} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
