import ReactGA from "react-ga";

export const log = (category, event, data) => {
  if (process.env.REACT_APP_GA_TRACKING_ENABLED === "true") {
    ReactGA.event({
      category: category,
      action: event
    });
  } else {
    console.log(`Logging Event: ${category} ${event} with data ${data}`);
  }
};
