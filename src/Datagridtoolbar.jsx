import {  Stack } from "@mui/material";
import { GridToolbarExport, GridToolbarFilterButton } from "@mui/x-data-grid";

export default function Datagridtoolbar() {
  return (
    <Stack spacing={2} direction="row">
        <GridToolbarExport></GridToolbarExport>
        <GridToolbarFilterButton></GridToolbarFilterButton>
    </Stack>
  )
}
