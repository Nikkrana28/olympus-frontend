import { Typography, TypographyTypeMap, Box } from "@material-ui/core";
import { Skeleton, SkeletonTypeMap } from "@material-ui/lab";
import InfoTooltip from "src/components/InfoTooltip/InfoTooltip";

import "./Metric.scss";

interface MetricProps {
  className?: string;
  label?: string;
  metric?: string;
  isLoading?: boolean;
  labelVariant?: TypographyTypeMap["props"]["variant"];
  metricVariant?: TypographyTypeMap["props"]["variant"];
  tooltip?: string;
  loadingWidth?: SkeletonTypeMap["props"]["width"];
}

/**
 * Primary Metric Component for UI. Presents a label and metric with optional tooltip.
 */
const Metric = ({
  className = "",
  metricVariant = "h4",
  labelVariant = "h5",
  loadingWidth = "100%",
  ...props
}: MetricProps) => {
  return (
    <div className={`metric ${className}`}>
      <Box textAlign={{ xs: "left", sm: "center" }}>
        <Typography variant={labelVariant} color="textSecondary">
          <div>
            <div>
              {props.label}
              {props.tooltip && <InfoTooltip message={props.tooltip} children={undefined} />}
            </div>
          </div>
        </Typography>
        <Typography variant={metricVariant} style={{ width: "100%" }}>
          {props.isLoading ? <Skeleton width={loadingWidth} /> : <span>{props.metric}</span>}
        </Typography>
      </Box>
    </div>
  );
};
export default Metric;
{
  /* <div
            style={{
              position: "absolute",
              width: "5px",
              height: "120px",
              left: "0px",
              top: "0px",
              backgroundColor: "#FF4003",
            }}
          ></div> */
}
