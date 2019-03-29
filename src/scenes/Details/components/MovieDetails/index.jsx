import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';

export const MovieDetails = () => (
    <Grid style={{ marginBottom: 20 }} container spacing={40}>
        <Grid item xs={12}>
            <Paper elevation={1} style={{ padding: 20 }}>
                <Grid container spacing={40}>
                    <Grid item xs={12} md={4}>
                        <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                    </Grid>
                    <Grid container spacing={40} item xs={12} md={8}>
                        <Grid
                            container
                            alignItems="center"
                            item
                            xs={12}
                            md={10}
                        >
                            <Typography variant="h4">Title</Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            md={2}
                            container
                            item
                            alignItems="center"
                            justify="flex-end"
                        >
                            <Badge badgeContent={4.5} color="primary">
                                <Typography
                                    style={{ paddingRight: 20 }}
                                    variant="button"
                                >
                                    Rating
                                </Typography>
                            </Badge>
                        </Grid>
                        <Grid item container spacing={40} xs={12}>
                            <Grid item>
                                <Typography variant="button">2012</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="button">Genre</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Architecto consequatur
                                corporis cumque debitis doloremque eius eos ex
                                inventore magnam minima, molestiae nisi
                                perferendis quaerat sint soluta totam unde
                                voluptatibus voluptatum! Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Architecto
                                consequatur corporis cumque debitis doloremque
                                eius eos ex inventore magnam minima, molestiae
                                nisi perferendis quaerat sint soluta totam unde
                                voluptatibus voluptatum!Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Architecto
                                consequatur corporis cumque debitis doloremque
                                eius eos ex inventore magnam minima, molestiae
                                nisi perferendis quaerat sint soluta totam unde
                                voluptatibus voluptatum!Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Architecto
                                consequatur corporis cumque debitis doloremque
                                eius eos ex inventore magnam minima, molestiae
                                nisi perferendis quaerat sint soluta totam unde
                                voluptatibus voluptatum!
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
);
