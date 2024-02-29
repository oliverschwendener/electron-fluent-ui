import { Avatar, Skeleton, SkeletonItem, TableCell, TableRow } from "@fluentui/react-components";

type MailsProps = {
    isLoading: boolean;
};

export const Mails = ({ isLoading }: MailsProps) => {
    return isLoading ? (
        <>
            {[...Array(4)].map((_, index) => (
                <TableRow key={`skeletion-${index}`}>
                    <TableCell>
                        <Skeleton>
                            <SkeletonItem />
                        </Skeleton>
                    </TableCell>
                    <TableCell>
                        <Skeleton>
                            <SkeletonItem />
                        </Skeleton>
                    </TableCell>
                    <TableCell>
                        <Skeleton>
                            <SkeletonItem />
                        </Skeleton>
                    </TableCell>
                </TableRow>
            ))}
        </>
    ) : (
        <>
            <TableRow>
                <TableCell>
                    <Avatar name="Jet Brains" />
                </TableCell>
                <TableCell>Your request for JetBrains OSS development license</TableCell>
                <TableCell>Feb 28</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Avatar name="Git Hub" />
                </TableCell>
                <TableCell>Build 8319243 failed</TableCell>
                <TableCell>Feb 27</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Avatar name="Some One" />
                </TableCell>
                <TableCell>Somone approved your pull request</TableCell>
                <TableCell>Jan 17</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Avatar name="Micro Soft" />
                </TableCell>
                <TableCell>We’ve verified your profile SellerId</TableCell>
                <TableCell>Jan 02</TableCell>
            </TableRow>
        </>
    );
};
