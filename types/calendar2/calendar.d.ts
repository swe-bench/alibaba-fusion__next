import React, { type UIEvent } from 'react';
import PT from 'prop-types';
import { type Dayjs } from 'dayjs';
import { type ClassPropsWithDefault } from '../util';
import type {
    CalendarMode,
    CalendarPanelMode,
    CalendarProps,
    CalendarState,
    CellData,
} from './types';
type CalendarPropsWithDefault = ClassPropsWithDefault<CalendarProps, typeof Calendar.defaultProps>;
declare class Calendar extends React.Component<CalendarProps, CalendarState> {
    static propTypes: {
        rtl: PT.Requireable<boolean>;
        name: PT.Requireable<string>;
        prefix: PT.Requireable<string>;
        locale: PT.Requireable<object>;
        shape: PT.Requireable<string>;
        mode: PT.Requireable<string>;
        value: (
            props: Record<string, unknown>,
            propName: string,
            componentName: string
        ) => Error | null;
        defaultValue: (
            props: Record<string, unknown>,
            propName: string,
            componentName: string
        ) => Error | null;
        panelValue: (
            props: Record<string, unknown>,
            propName: string,
            componentName: string
        ) => Error | null;
        defaultPanelValue: (
            props: Record<string, unknown>,
            propName: string,
            componentName: string
        ) => Error | null;
        disabledDate: PT.Requireable<(...args: any[]) => any>;
        dateCellRender: PT.Requireable<(...args: any[]) => any>;
        quarterCellRender: PT.Requireable<(...args: any[]) => any>;
        monthCellRender: PT.Requireable<(...args: any[]) => any>;
        yearCellRender: PT.Requireable<(...args: any[]) => any>;
        headerRender: PT.Requireable<(...args: any[]) => any>;
        onChange: PT.Requireable<(...args: any[]) => any>;
        onSelect: PT.Requireable<(...args: any[]) => any>;
        onPanelChange: PT.Requireable<(...args: any[]) => any>;
        cellProps: PT.Requireable<object>;
        cellClassName: PT.Requireable<
            NonNullable<string | ((...args: any[]) => any) | null | undefined>
        >;
        panelMode: PT.Requireable<any>;
        onPrev: PT.Requireable<(...args: any[]) => any>;
        onNext: PT.Requireable<(...args: any[]) => any>;
        onSuperPrev: PT.Requireable<(...args: any[]) => any>;
        onSuperNext: PT.Requireable<(...args: any[]) => any>;
        colNum: PT.Requireable<number>;
    };
    static defaultProps: {
        rtl: boolean;
        prefix: string;
        locale: Partial<{
            today: string;
            now: string;
            ok: string;
            clear: string;
            month: string;
            year: string;
            prevYear: string;
            nextYear: string;
            prevMonth: string;
            nextMonth: string;
            prevDecade: string;
            nextDecade: string;
            yearSelectAriaLabel: string;
            monthSelectAriaLabel: string;
            monthBeforeYear?: boolean | undefined;
            format?:
                | {
                      months?: string[] | undefined;
                      shortMonths?: string[] | undefined;
                      firstDayOfWeek?: number | undefined;
                      weekdays?: string[] | undefined;
                      shortWeekdays?: string[] | undefined;
                      veryShortWeekdays?: string[] | undefined;
                  }
                | undefined;
        }> & {
            momentLocale?: string | undefined;
        };
        shape: string;
        mode: string;
    };
    readonly props: CalendarPropsWithDefault;
    constructor(props: CalendarProps);
    static getDerivedStateFromProps(
        props: CalendarPropsWithDefault,
        state: CalendarState
    ): Partial<CalendarState>;
    switchPanelMode: (mode: CalendarPanelMode) => CalendarPanelMode;
    shouldSwitchPanelMode: () => boolean;
    onDateSelect: (value: Dayjs, _: UIEvent, { isCurrent }: Pick<CellData, 'isCurrent'>) => void;
    onModeChange: (mode: CalendarMode, reason?: string) => void;
    onPanelValueChange: (panelValue: Dayjs, reason?: string) => void;
    onPanelModeChange: (panelMode: CalendarPanelMode, reason?: string) => void;
    onPanelChange: (value: Dayjs, mode: CalendarPanelMode, reason?: string) => void;
    onChange: (value: Dayjs) => void;
    render(): React.JSX.Element;
}
declare const _default: typeof Calendar;
export default _default;
