Add-Type -AssemblyName System.Drawing

$width = 1440
$height = 1000
$bitmap = New-Object Drawing.Bitmap $width, $height
$graphics = [Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = 'AntiAlias'

$pink = New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(245, 144, 198))
$white = New-Object Drawing.SolidBrush ([Drawing.Color]::White)
$panel = New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(88, 70, 116))
$dark = New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(35, 26, 52))
$black = New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(31, 28, 39))
$cyan = New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(169, 222, 245))
$titleFont = New-Object Drawing.Font 'Arial', 54, ([Drawing.FontStyle]::Bold)
$labelFont = New-Object Drawing.Font 'Arial', 18, ([Drawing.FontStyle]::Bold)

$graphics.Clear([Drawing.Color]::FromArgb(45, 28, 68))
$graphics.FillRectangle($panel, 130, 120, 1180, 760)
$graphics.DrawString('Kuromi Care', $titleFont, $white, 160, 170)
$graphics.FillRectangle($dark, 250, 315, 780, 430)
$graphics.FillRectangle((New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(96, 72, 132))), 290, 355, 700, 350)
$graphics.FillRectangle((New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(50, 37, 72))), 340, 410, 185, 130)
$graphics.FillRectangle((New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(62, 45, 88))), 575, 410, 160, 130)
$graphics.FillRectangle((New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(42, 31, 62))), 790, 410, 135, 240)

$graphics.FillEllipse($white, 630, 515, 105, 105)
$graphics.FillEllipse($black, 604, 494, 45, 55)
$graphics.FillEllipse($black, 715, 494, 45, 55)
$graphics.FillEllipse($pink, 675, 548, 25, 20)
$graphics.FillEllipse($pink, 95, 75, 115, 95)
$graphics.FillEllipse($pink, 170, 75, 115, 95)
$graphics.FillPolygon($pink, [Drawing.Point[]]@(
  [Drawing.Point]::new(100, 130),
  [Drawing.Point]::new(282, 130),
  [Drawing.Point]::new(191, 230)
))

$foods = @('Strawberry', 'Ice Cream', 'Cake', 'Milk', 'Pudding', 'Donut')
for ($i = 0; $i -lt $foods.Length; $i++) {
  $x = 160 + ($i * 185)
  $graphics.FillRectangle((New-Object Drawing.SolidBrush ([Drawing.Color]::FromArgb(98, 80, 126))), $x, 770, 160, 78)
  $graphics.FillEllipse($pink, ($x + 60), 785, 32, 32)
  $graphics.DrawString($foods[$i], $labelFont, $white, ($x + 18), 822)
}

$graphics.FillRectangle($dark, 160, 870, 520, 54)
$graphics.FillRectangle($pink, 277, 889, 330, 10)
$graphics.DrawString('Hunger', $labelFont, $white, 170, 883)
$graphics.FillRectangle($dark, 720, 870, 520, 54)
$graphics.FillRectangle($cyan, 840, 889, 350, 10)
$graphics.DrawString('Happiness', $labelFont, $white, 735, 883)

$bitmap.Save('D:\project\portofolioabdurrahman\frontend\src\assets\project-kuromi-care.png', [Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()
