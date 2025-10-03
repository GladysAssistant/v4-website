---
id: chart
title: Display a chart on the dashboard
sidebar_label: Chart
---

## Prerequisites

You must have configured at least one sensor sending data to Gladys.

## Configuration

Go to the Gladys dashboard and click on the "Edit" button.

Add a "Chart" widget:

![Edit dashboard](../../static/img/docs/en/dashboard/chart/add-chart.png)

Select the devices you want to display, then configure the rest of the widget:

- **Name**: Will be displayed at the top of the widget on the dashboard
- **Chart type**: It's possible to display several types of charts in Gladys (Line, Bar, Area, Straight line, Binary)
- **Display axes**: We offer two types of display, a more design-oriented display without axes and one with axes
- **Display variation**: If selected, the chart will display the relative variation between the first and last value over the selected interval

![Configure chart](../../static/img/docs/en/dashboard/chart/configure-chart.png)

If you want to group data by time interval, you can modify this option in the advanced settings:

![Group by time interval](../../static/img/docs/en/dashboard/chart/group-by.png)

## Chart examples

Let's say you want to display the energy consumption of one of your devices, the "bar" chart is particularly suitable for this:

![Bar display](../../static/img/docs/en/dashboard/chart/bar.jpg)

You can also display this data as an "area" curve, without axes for a more design-oriented display:

![Area display without axes](../../static/img/docs/en/dashboard/chart/area-without-axes.jpg)

Or with axes for better readability:

![Area display with axes](../../static/img/docs/en/dashboard/chart/area-with-axes.jpg)

The possibilities are endless!
