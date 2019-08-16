
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TicketFirstStep from './TicketFirstStep';
import TicketSecondStep from './TicketSecondStep';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const useStyles = makeStyles(theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

function getSteps() {
    return ['Check basket', 'Fill info'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <TicketFirstStep />;
        case 1:
            return <TicketSecondStep />;
        // case 2:
        //     return `Try out different ad text to see what brings in the most customers,
        //       and learn how to enhance your ads using features like ad extensions.
        //       If you run into any problems with your ads, find out how to tell if
        //       they're running and how to resolve approval issues.`;
        default:
            return 'Unknown step';
    }
}

function TicketPage({ shop, actions }) {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    async function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
        if (activeStep === steps.length - 1) {
            await actions.addTicket(shop.basket);
            await actions.cleanBasket();
        }
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    return (
        <div className={classes.root}>
            {shop.basket.products.length === 0 ? (<Paper square elevation={0} className={classes.resetContainer}><Typography>Please Select Some products</Typography></Paper>) :
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                                {getStepContent(index)}
                                <div className={classes.actionsContainer}>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            className={classes.button}
                                        >
                                            Back
                            </Button>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                        </Button>
                                    </div>
                                </div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            }
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished. Ticket ready {shop.basket.ticketId}</Typography>
                </Paper>
            )}
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, mapDispatchToProps)(TicketPage);

