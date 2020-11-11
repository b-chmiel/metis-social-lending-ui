import React from 'react';
import {LoginForm} from '../../components/LoginForm';
import {Box, Flex, Text} from '@chakra-ui/core';
import {Routes} from '../../../routing/routes';
import {AppLink} from '../../../routing/components/AppLink';

export const LoginView: React.FC = () => {
    return (
        <Flex width={'full'} p={4} align={'center'} justifyContent={'center'} direction={'column'}>
            <LoginForm />
            <Box width={'full'} maxWidth={500} my={6} p={2} borderWidth={1} borderRadius={8} boxShadow={'lg'}>
                <Text display={'inline'}>Are you new here? </Text>
                <AppLink to={Routes.REGISTER}>Register!</AppLink>
            </Box>
        </Flex>
    );
};