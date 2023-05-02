import { Box, Button, Divider, ListItem, TextField, Typography } from "@mui/material"


function BuilderLoginForm({ dynamicList }) {
    return (
        <Box
            sx={{
                marginLeft: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={() => { console.log("ok") }} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Continue
                </Button>
                <Divider variant="middle" />
                {dynamicList.map(({ keys, isChecked }, index) => {
                    return isChecked &&
                        <div key={`section2-${index}`}>
                            <ul>
                                {keys.map(({ value, isActive }, i) => {
                                    return isActive && <ListItem key={`item2-${index}-${i}`}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                        >
                                            {value}
                                        </Button>
                                    </ListItem>
                                })}
                            </ul>
                        </div>
                })}
            </Box>
        </Box>
    )
}

export default BuilderLoginForm