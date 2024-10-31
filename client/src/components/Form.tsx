import React, { useEffect } from "react";
import { useState } from "react";
import { Paper, TextField, Button, Typography, Box } from "@mui/material";


const Form = () => {
    const [postData, setPostData] = useState({
      lyrics: "",
      duration: "",
    });
  return (

    <Paper>
      <Box>
        <form autoComplete="off" noValidate >
          <Box>
            <TextField
              name="lyrics"
              variant="outlined"
              label="Lyrics"
              fullWidth
              multiline
              value={postData.lyrics}
              onChange={(e) =>
                setPostData({ ...postData, lyrics: e.target.value })
              }
            />
            <TextField
              name="duration"
              variant="outlined"
              label="Duration"
              fullWidth
              multiline
              value={postData.duration}
              onChange={(e) =>
                setPostData({ ...postData, duration: e.target.value })
              }
            />
          </Box>
          <Button
            variant="contained"
            size="large"
            type="submit"
            fullWidth
          >
            Generate
          </Button>
        </form>
      </Box>
    </Paper>

  )
}

export default Form