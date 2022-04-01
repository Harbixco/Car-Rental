import React from "react";
import "./Home.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import SearchIcon from "@mui/icons-material/Search";
import { topFilms } from "./AutocompleteOptions";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import benz from "./images/benz.png";
import hummer from "./images/hummer.png";
import lexus from "./images/lexus.png";
import { About } from "./About";
import { ContactUs } from "./ContactUs";
import { FAQs } from "./FAQs";

// AUTOCOMPLETE SEARCH SPACE
interface Film {
  title: string;
  year: number;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
export const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Film[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...topFilms]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  // CARD

  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <>
      {/* AUTOCOMPLETE SEARCH SPACE */}

      <div className="container-fluid compete">
        <div className="row">
          <div className="col-md-12">
            <div className="Browse-cars">Browse Cars</div>
            <div>
              <Autocomplete
                id="asynchronous-demo"
                sx={{ width: 300 }}
                open={open}
                onOpen={() => {
                  setOpen(true);
                }}
                onClose={() => {
                  setOpen(false);
                }}
                isOptionEqualToValue={(option, value) =>
                  option.title === value.title
                }
                getOptionLabel={(option) => option.title}
                options={options}
                loading={loading}
                renderInput={(params) => (
                  <TextField
                    style={{ border: "2px solid white" }}
                    {...params}
                    label="Search for Favorite Car"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          <SearchIcon />
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="Hot-deal">
        <div>
          <div className="hot-deal">
            {" "}
            <Button className="button">Hot Deal</Button>
          </div>
        </div>
        <div className="hot-deal">
          <Button className="button">View Deal</Button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Card sx={{ minWidth: 275 }} style={{ marginTop: "40px" }}>
              <CardContent className="cards">
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <div className="first-card">
                    <div>
                      <div className="first-card-text">Benz</div>
                      <div className="first-card-text">360 Rs</div>
                    </div>
                    <div>
                      <div className="first-card-text">$500</div>
                      <div className="first-card-text">/daily</div>
                    </div>
                  </div>
                </Typography>
                <Typography style={{ textAlign: "center" }}>
                  <img src={benz} className="benz" />
                </Typography>
              </CardContent>
              <CardActions className="cards">
                <div className="card-bottom-button">
                  <div>
                    <Button className="button">Details</Button>
                  </div>
                  <div className="second-buttton">
                    <Button className="button">Rent now</Button>
                  </div>
                </div>
              </CardActions>
            </Card>
          </div>
          <div className="col-md-4">
            <Card sx={{ minWidth: 275 }} style={{ marginTop: "40px" }}>
              <CardContent className="cards">
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <div className="first-card">
                    <div>
                      <div className="first-card-text">lexus</div>
                      <div className="first-card-text">450 Ps</div>
                    </div>
                    <div>
                      <div className="first-card-text">$550</div>
                      <div className="first-card-text">/daily</div>
                    </div>
                  </div>
                </Typography>
                <Typography style={{ textAlign: "center" }}>
                  <img src={lexus} className="lexus" />
                </Typography>
              </CardContent>
              <CardActions className="cards">
                <div className="card-bottom-button">
                  <div>
                    <Button className="button">Details</Button>
                  </div>
                  <div className="second-buttton">
                    <Button className="button">Rent now</Button>
                  </div>
                </div>
              </CardActions>
            </Card>
          </div>
          <div className="col-md-4">
            <Card sx={{ minWidth: 275 }} style={{ marginTop: "40px" }}>
              <CardContent className="cards">
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  <div className="first-card">
                    <div>
                      <div className="first-card-text">hummer</div>
                      <div className="first-card-text">Amg-430</div>
                    </div>
                    <div>
                      <div className="first-card-text">$600</div>
                      <div className="first-card-text">/daily</div>
                    </div>
                  </div>
                </Typography>
                <Typography style={{ textAlign: "center" }}>
                  <img src={hummer} className="hummer" />
                </Typography>
              </CardContent>
              <CardActions className="cards">
                <div className="card-bottom-button">
                  <div>
                    <Button className="button">Details</Button>
                  </div>
                  <div className="second-buttton">
                    <Button className="button">Rent now</Button>
                  </div>
                </div>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
      <div id="About">
        <About />
      </div>
      <div id="ContactUs">
        <ContactUs />
      </div>
      <div id="FAQs">
        <FAQs />
      </div>
    </>
  );
};
